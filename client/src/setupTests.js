import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/* eslint-disable node/no-unpublished-require */
global.fetch = require('jest-fetch-mock');
