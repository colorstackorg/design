import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import FormErrorMessage from './FormErrorMessage';
import FormShortText from './FormShortText';
import FormSubmitButton from './FormSubmitButton';

const mockSubmitFunction = jest.fn();

const TestForm: React.FC = () => {
  const onSubmit = ({ items }): void => {
    mockSubmitFunction({
      fullName: items.fullName.value
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormShortText required name="fullName" />
      <FormErrorMessage />
      <FormSubmitButton>Submit</FormSubmitButton>
    </Form>
  );
};

describe('<Form />', () => {
  beforeEach(() => {
    render(<TestForm />);
  });

  test('If the form is valid, the onSubmit() function should be trigged.', async () => {
    const inputElement: HTMLElement = screen.getByRole('textbox');

    const submitElement: HTMLElement = screen.getByRole('button', {
      name: /Submit/i
    });

    userEvent.type(inputElement, 'Rami Abdou');
    userEvent.click(submitElement);

    await waitFor(() => {
      expect(mockSubmitFunction).toBeCalledWith({ fullName: 'Rami Abdou' });
    });
  });

  test('If there are validation errors, the onSubmit() function should set an error message.', async () => {
    const submitElement: HTMLElement = screen.getByRole('button', {
      name: /Submit/i
    });

    userEvent.click(submitElement);

    await waitFor(() => {
      const element: HTMLElement = screen.getByText(
        /Please fix the errors and try again./i
      );

      expect(element).toBeInTheDocument();
    });
  });

  test('Form should update the loading state of the submit button.', async () => {
    const inputElement: HTMLElement = screen.getByRole('textbox');

    const submitElement: HTMLElement = screen.getByRole('button', {
      name: /Submit/i
    });

    userEvent.type(inputElement, 'Rami Abdou');
    userEvent.click(submitElement);

    await waitFor(() => {
      // After some time, the button spinner should be showing.
      const buttonSpinnerElement: HTMLElement = screen.queryByRole('status');
      expect(buttonSpinnerElement).toBeInTheDocument();
    });

    // After some time, the button spinner should no longer be showing.
    const buttonSpinnerElement: HTMLElement = screen.queryByRole('status');
    expect(buttonSpinnerElement).not.toBeInTheDocument();
  });

  //   test('', async () => {
  //     const inputElement: HTMLElement = screen.getByRole('textbox');

  //     const submitElement: HTMLElement = screen.getByRole('button', {
  //       name: /Submit/i
  //     });

  //     userEvent.type(inputElement, 'Rami Abdou');
  //     userEvent.click(submitElement);

  //     await waitFor(() => {
  //       expect(mockSubmitFunction).toBeCalledWith({ fullName: 'Rami Abdou' });
  //     });
  //   });
});
