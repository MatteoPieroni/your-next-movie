/***************************************
 * This file sets Enzyme up for
 * testing
 **************************************/
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
