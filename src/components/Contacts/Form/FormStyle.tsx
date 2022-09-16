import styled from "styled-components";

export const ContainerForm = styled.form`

`

/**
 *
 *       S t y l e    L a b e l
 */

export const Labels = styled.label`
  font: normal 1.6rem 'Heebo';
  color: #fff;
`

/**
 *
 *       S t y l e    i n p u t    T e x t
 */


export const Inputs = styled.input`
   width: 41.6rem;
   height: 5.6rem;
   border-radius: .6rem;
   background-color: ${ ({ theme }) => theme.Colors.backgroundForm};
   border: 1px solid #fff;
   margin: 1.2rem 0 2.4rem 0;
   color: #fff;
   font-size: 1.8rem;
   color: #fff;
   padding-left: 1rem;


        :focus {
          border: none;
          background-color: none;
        }
`

/**
 *
 *       S t y l e     G r u p a m e n t o     C h e c k e d
 */

export const GrupChecked = styled.div`
   width: 40rem;
   height: 2.5rem;
   margin: 1.3rem 0 2rem 0;
   cursor: pointer;
   display: flex;
`

/**
 *
 *       S t y l e     C h e c k e d
 */

export const Checkbox = styled.input`
  appearance: none;
  background-color:  ${ ({ theme }) => theme.Colors.backgroundForm};
  width: 2rem;
  height: 2rem;
  border-radius: .6rem;
  border: .1rem solid #fff;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

      &::before {
        content: '';
        position: absolute;
        width: .4rem;
        height: .9rem;
        opacity: 0;
        transition: all 300ms ease-in-out;

      }

      &:checked::before {
        border-right: .2rem solid #fff;
        border-bottom: .2rem solid #fff;
        opacity: 1;
        transform: rotate(45deg);

      }

      &:focus {
        box-shadow: 0 0 .5rem ${ ({ theme }) => theme.Colors.backgroundForm};
      }
`

/**
 *
 *       S t y l e    T e x t    C h e c k e d
 */


export const Textcheckbox = styled.label`
  font: normal 1.6rem 'Heebo';
  color: #fff;
  margin-left: 1rem;
  letter-spacing: .15rem;
  cursor: pointer;
`
