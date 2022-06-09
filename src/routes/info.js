import express from "express";
import { Router } from "express";
import { cpus } from 'os';
import _loggerW from '../../winston.js';

const infoRouter = Router();

const numCPUs = cpus().length;

const processTypes = {
    processors: numCPUs,
    cwd: process.cwd(),
    pid: process.pid,
    node: process.version,
    memory: process.memoryUsage(),
    platform: process.platform,
    path: process.execPath,
    title: process.title
}

infoRouter.get('/', (req,res)=>{
    const { url, method } = req;
	_loggerW.info(`Ruta ${method} ${url} solicitada!`)
    res.render('info', processTypes)
})

export default infoRouter;