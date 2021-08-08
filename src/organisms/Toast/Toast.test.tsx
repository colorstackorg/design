import React from 'react';

import { act, render, screen } from '@testing-library/react';
import { Color } from '../../utils/constants';
import { showToast, useToast } from './Toast.state';
import { ToastState } from './Toast.types';
import ToastPortal from './ToastPortal';

const initialState: ToastState = useToast.getState();

describe('<Toast />', () => {
  beforeEach(() => {
    useToast.setState(initialState, true);
    render(<ToastPortal />);
  });

  test('Success toast should render with green.', () => {
    act(() => {
      showToast({
        message: 'Test Message',
        success: true
      });
    });

    const element: HTMLElement = screen.getByRole('alert');
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({ backgroundColor: Color.SUCCESS });
  });

  test('Error toast should render with red.', () => {
    act(() => {
      showToast({
        message: 'Test Message',
        success: false
      });
    });

    const element: HTMLElement = screen.getByRole('alert');
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({ backgroundColor: Color.ERROR });
  });

  test('Multiple toasts should be able to render at the same time.', () => {
    act(() => {
      showToast({
        message: 'Test Message',
        success: true
      });

      showToast({
        message: 'Test Message',
        success: false
      });
    });

    const elements: HTMLElement[] = screen.getAllByRole('alert');
    expect(elements).toHaveLength(2);
  });
});
