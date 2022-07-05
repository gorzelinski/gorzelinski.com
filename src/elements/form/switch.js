import styled from "styled-components"

import { outline } from "../effects"

export const Switch = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  ${outline}
  appearance: none;
  --active: var(--color-primary-base);
  --active-inner: var(--color-background);
  --border: var(--color-primary-base);
  --background: var(--color-background);
  width: var(--space-50);
  height: var(--font-height-base);
  border-radius: var(--border-radius-20);
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 0;
  cursor: pointer;
  background-color: var(--b, var(--background));
  border: var(--space-00) solid var(--bc, var(--border));
  transition: background-color var(--duration-natural),
    border-color var(--duration-natural);

  &:checked {
    --size: calc(var(--space-30) + var(--space-10));
    --x: calc(var(--space-50) - var(--size) - 3 * var(--space-10));
    --ab: var(--active-inner);
    --b: var(--active);
    --bc: var(--active);
    --d-o: var(--duration-natural);
    --d-t: var(--duration-slow);
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    &:disabled {
      &:after {
        background-color: var(--color-gray-80);
      }
    }
  }
  &:after {
    --size: calc(var(--space-30) + var(--space-10));
    content: "";
    display: block;
    position: absolute;
    left: var(--space-10);
    top: var(--space-10);
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
    background-color: var(--ab, var(--border));
    transform: translateX(var(--x, 0));
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
      opacity var(--d-o, 0.2s);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-gray-90);
    border: var(--space-00) solid var(--color-gray-base);
    &:after {
      background-color: var(--color-gray-base);
    }
  }
`
