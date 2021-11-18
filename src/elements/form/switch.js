import styled from "styled-components"

export const Switch = styled.input.attrs(props => ({
  type: "checkbox",
}))`
  -webkit-appearance: none;
  --moz-appearance: none;
  --active: ${props => props.theme.color.primary.base};
  --active-inner: ${props => props.theme.color.background};
  --border: ${props => props.theme.color.text.shade500};
  --background: ${props => props.theme.color.background};
  width: ${props => props.theme.space.l};
  height: ${props => props.theme.font.height.base};
  border-radius: ${props => props.theme.space.s};
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 0;
  cursor: pointer;
  background: var(--b, var(--background));
  border: ${props => props.theme.space.xxxs} solid var(--bc, var(--border));
  transition: background ${props => props.theme.duration.natural},
    border-color ${props => props.theme.duration.natural};

  &:checked {
    --size: calc(
      ${props => props.theme.space.s} + ${props => props.theme.space.xxs}
    );
    --x: calc(
      ${props => props.theme.space.l} - var(--size) - 3 *
        ${props => props.theme.space.xxs}
    );
    --ab: var(--active-inner);
    --b: var(--active);
    --bc: var(--active);
    --d-o: ${props => props.theme.duration.natural};
    --d-t: ${props => props.theme.duration.slow};
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  &:after {
    --size: calc(
      ${props => props.theme.space.s} + ${props => props.theme.space.xxs}
    );
    content: "";
    display: block;
    position: absolute;
    left: ${props => props.theme.space.xxs};
    top: ${props => props.theme.space.xxs};
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
    background: var(--ab, var(--border));
    transform: translateX(var(--x, 0));
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
      opacity var(--d-o, 0.2s);
  }
`
