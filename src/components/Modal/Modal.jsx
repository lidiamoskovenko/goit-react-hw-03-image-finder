import React, { Component } from "react";
import {Styled} from './Styled';

export class Modal extends Component {
      
        componentDidMount() {
          window.addEventListener('keydown', this.handleKeyDown);
          document.body.style.overflow = 'hidden';
        }
      
        componentWillUnmount() {
          window.removeEventListener('keydown', this.handleKeyDown);
          document.body.style.overflow = 'auto';
        }
      
      
        handleOverayClick = (event) => {
                if (event.target === event.currentTarget) {
                  this.props.closeModal();
                }
              };      
        handleKeyDown = event => {
          if (event.code === 'Escape') {
            this.props.closeModal();
          }
        };
        render() {
                return <Styled onClick={this.handleOverayClick}>
  <div className="modal">
    <img src={this.props.modalImage} alt="Foto" />
  </div>
</Styled>        
        }
      }
