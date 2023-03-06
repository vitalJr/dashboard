import React, { ReactElement } from 'react';
import { create, ReactTestRenderer } from 'react-test-renderer';
import Login from '../index';
import { Container } from '../styles';

let wrapper: ReactTestRenderer;
let root: ReactTestRenderer['root'];

const componentToTest = (): ReactElement => <Login />;

describe('Login Test', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    wrapper = create(componentToTest());
    root = wrapper.root;
  });

  it('render container', () => {
    expect(root.findAllByType(Container)).toHaveLength(1);
  });
});
