import styled from 'styled-components';

export const NavWrapper = styled.div`
  height: 30px;
  // background-color: #c20c0c;
  background-color: ${props => props.theme.colors.primary};
  height: 30px;
  background-color: rgb(105 118 157);
  align-self: center;
  transform: rotate(86deg);
  transform-origin: left top;
  .nav {
    display: flex;
    padding-left: 180px;
    position: relative;
    top: -4px;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        color: #fff;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: #879879;
          border-radius: 20px;
        }
      }
    }
  }
`;
