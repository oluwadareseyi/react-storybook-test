import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: () => `
    background: none;
    color: ${(props) => props.theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${(props) => props.theme.status.warningColorHover};
      outline: 3px solid ${(props) => props.theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${(props) => props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${(props) => props.theme.status.warningColor};
    color: ${(props) => props.theme.textColorInverted};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${(props) => props.theme.status.warningColor};
  `,
  error: () => `
    background: none;
    color: ${(props) => props.theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${(props) => props.theme.status.errorColorHover};
      outline: 3px solid ${(props) => props.theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${(props) => props.theme.status.errorColorActive};
    }
  `,
  primaryButtonError: () => `
    background-color: ${(props) => props.theme.status.errorColor};
    color: ${(props) => props.theme.textColorInverted};
  `,
  secondaryButtonError: () => `
    border: 2px solid ${(props) => props.theme.status.warningColor};
  `,
  success: () => `
    background: none;
    color: ${(props) => props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${(props) => props.theme.status.successColorHover};
      outline: 3px solid ${(props) => props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${(props) => props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: () => `
    background-color: ${(props) => props.theme.status.successColor};
    color: ${(props) => props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${(props) => props.theme.status.warningColor};
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  cursor: pointer;
  min-width: 100px;
  font-family: ${(props) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${(props) => props.theme.disabled};
    border: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: 0;
  color: ${(props) => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 1.5px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
    border-color: ${(props) => props.theme.textOnDisabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
