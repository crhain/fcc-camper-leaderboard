import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { connect } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import CamperList from '../../components/CamperList';

describe('CamperList', ()=>{
    it('renders without crashing', ()=>{
        shallow(<CamperList/>);
    });
});