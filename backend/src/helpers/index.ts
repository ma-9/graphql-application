import config from 'config';

export const serverPort = 5000;

export const MongoDB_URI = config.get('MongoDB_URI');

export const dateToString = (date) => new Date(date).toISOString();
