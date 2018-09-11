import * as driver from '../../src';
import {lf} from './localforage';

lf.defineDriver(driver);
lf.setDriver(driver._driver);
