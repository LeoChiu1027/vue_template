export default function log({ next, to }) {
    console.log('logger',to.name);
  
    return next();
  }