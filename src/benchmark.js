import autocannon from 'autocannon';
import { PassThrough } from 'stream';
import _loggerW from '../winston.js';

const run = (url) => {
    const buf = [];
    const outputStream = new PassThrough();

    const inst = autocannon({
        url,
        connections: 100,
        duration: 20
    });

    autocannon.track(inst, {outputStream});

    outputStream.on('data', data => buf.push(data))
    inst.on('done', ()=>{
        process.stdout.write(Buffer.concat(buf))
    })
}
 _loggerW.info('Running benchmark');

 run('http://localhost:8080/info');
