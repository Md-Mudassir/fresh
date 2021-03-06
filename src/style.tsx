import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  .fresh-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 0.5em 0px;
  }

  .fresh-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .fresh-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  .fresh-slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .fresh-slider {
    background-color: #2196f3;
  }

  input:focus + .fresh-slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .fresh-slider:before {
    transform: translateX(26px);
  }

  input,
  select,
  textarea,
  .fresh-input {
    background-color: transparent;
    box-sizing: border-box;
    box-shadow: none;
    max-width: 100%;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: inherit;
    border-radius: 3px;
    font: inherit;
    margin: 0.5em 0px;
    padding: 0.75em;
    transition: border-color 0.2s ease 0s;
  }

  /* Text Area and Markdown */
  textarea,
  .fresh-input-textarea,
  .fresh-input-markdown {
    min-height: 6rem;
  }
  .fresh-markdown-wrapper {
    .fresh-input-markdown {
      border-color: #eee; 
    }
    .fresh-input-textarea,
    .fresh-input-markdown {
      width: 100%;
    }
    @media (min-width: 800px) {
      display: flex;
      .fresh-input-textarea {
        width: 50%;  
      }
      .fresh-input-markdown {
        width: calc(50% - 0.5em);  
        margin-left: 0.5em;
      }
    }
  }
  
  /* Label and Tooltip */
  .fresh-label {
    position: relative;
  }

  .fresh-title {
    display: flex; 
    align-items: center;
    .fresh-tooltip {
      position: relative;
      color: #000;
      &:after {
        position: absolute;
        left: 150%;
        min-width: 100px;
        content: attr(data-tooltip);
        opacity: 0;
        transition: all .3s ease-in-out .35s;
        visibility: hidden;
        z-index: 2;
        position: absolute;
        background-color: #eee;
        padding: 0.75em;
        border-radius: 3px;
        font-size: 0.8em;
      }
      &:hover:after {
        opacity: 1;
        left: 130%;
        visibility: visible;
      }
      .fresh-tooltip-icon {
        position: relative;
        height: 0.8em;
        width: 0.8em;
        min-height: 0.8em;
        min-width: 0.8em;
      }
    }
  }

  /* Reference Field */
  .fresh-focused {
    border: 1px solid #eee;
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
    background: white;
    width: 100%;
    margin-top: -0.5em;
    border-top: 0;
  }

  /* Select Field */
  .fresh-input-select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    padding-right: 30px;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),  linear-gradient(transparent 0%, transparent 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    &::-ms-expand {
      display: none;
    }
  }

  /* Tag Field */
  .fresh-input-tags {
    margin-top: 1rem;
  }

  .react-tagsinput-tag {
    background: #eee;
    padding: 6px 10px;
    margin: 0 6px 0 0;
  }

  .react-tagsinput-input {
    margin-top: 1rem;
    display: block;
  }

  /* Toggle Field */
  .fresh-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 0.5em 0px;
    .fresh-input-toggle {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .fresh-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: 0.4s;
      border-width: 1px;
      border-style: solid;
      border-image: initial;
      border-color: inherit;
      border-radius: 34px;
      &:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: 0.4s;
        border-width: 1px;
        border-style: solid;
        border-image: initial;
        border-color: inherit;
        border-radius: 50%;
      }
    }
  }
`

export default Global
