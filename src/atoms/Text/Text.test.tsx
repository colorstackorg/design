import React from 'react';

import { render, screen } from '@testing-library/react';
import { Color } from '../../utils/constants';
import Text from './Text';

describe('<Text />', () => {
  test('If variant is title, should render <h1 /> tag.', () => {
    const { container } = render(<Text variant="title">Hey!</Text>);
    const element: HTMLHeadingElement = container.querySelector('h1');
    expect(element).not.toBeNull();
  });

  test('If variant is subtitle, should render <h2 /> tag.', () => {
    const { container } = render(<Text variant="subtitle">Hey!</Text>);
    const element: HTMLHeadingElement = container.querySelector('h2');
    expect(element).not.toBeNull();
  });

  test('If variant is anything else, should render <p /> tag.', () => {
    const { container } = render(
      <>
        <Text variant="body">Hey!</Text>
        <Text variant="body-bold">Hey!</Text>
        <Text variant="body-web">Hey!</Text>
        <Text variant="body-web-bold">Hey!</Text>
        <Text variant="small">Hey!</Text>
      </>
    );

    const elements: NodeListOf<HTMLParagraphElement> =
      container.querySelectorAll('p');

    expect(elements).toHaveLength(6);
  });

  test('If color is black, then the color (in CSS) should be black.', () => {
    render(<Text color="black">Hey!</Text>);
    const element: HTMLElement = screen.getByText(/Hey/i);
    expect(element).toHaveStyle({ color: Color.BLACK });
  });

  test('If color is red, then the color (in CSS) should be red.', () => {
    render(<Text color="red">Hey!</Text>);
    const element: HTMLElement = screen.getByText(/Hey/i);
    expect(element).toHaveStyle({ color: Color.ERROR });
  });

  test('If color is white, then the color (in CSS) should be white.', () => {
    render(<Text color="white">Hey!</Text>);
    const element: HTMLElement = screen.getByText(/Hey/i);
    expect(element).toHaveStyle({ color: Color.WHITE });
  });

  test('If align is left, then the text-align (in CSS) should be left.', () => {
    render(<Text align="left">Hey!</Text>);
    const element: HTMLElement = screen.getByText(/Hey/i);
    expect(element).toHaveStyle({ textAlign: 'left' });
  });

  test('If align is center, then the text-align (in CSS) should be center.', () => {
    render(<Text align="center">Hey!</Text>);
    const element: HTMLElement = screen.getByText(/Hey/i);
    expect(element).toHaveStyle({ textAlign: 'center' });
  });

  test('If align is right, then the text-align (in CSS) should be right.', () => {
    render(<Text align="right">Hey!</Text>);
    const element: HTMLElement = screen.getByText(/Hey/i);
    expect(element).toHaveStyle({ textAlign: 'right' });
  });
});
