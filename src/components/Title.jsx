import React, { Component } from "react";

export default class Title extends Component {
  componentDidMount() {
    const time = 0.1;
    const paths = document.querySelectorAll("#logo path");
    for (let i = 0; i < paths.length; i++) {
      let length = paths[i].getTotalLength();
      paths[i].setAttribute(
        "style",
        `stroke-dasharray: ${length}; stroke-dashoffset: ${length}; animation: line-anim 2s ease forwards ${i *
          time}s;`
      );
    }
    document
      .getElementById("logo")
      .setAttribute(
        "style",
        `animation: fill 1s ease forwards ${paths.length * time}s`
      );
  }

  render() {
    return (
      <div>
        <svg
          id="logo"
          width="995"
          height="114"
          viewBox="0 0 995 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.592 108.008C46.28 108.008 37.784 105.848 30.104 101.528C22.424 97.112 16.328 91.016 11.816 83.24C7.4 75.368 5.192 66.536 5.192 56.744C5.192 46.952 7.4 38.168 11.816 30.392C16.328 22.52 22.424 16.424 30.104 12.104C37.784 7.688 46.28 5.48 55.592 5.48C65 5.48 73.544 7.688 81.224 12.104C88.904 16.424 94.952 22.472 99.368 30.248C103.784 38.024 105.992 46.856 105.992 56.744C105.992 66.632 103.784 75.464 99.368 83.24C94.952 91.016 88.904 97.112 81.224 101.528C73.544 105.848 65 108.008 55.592 108.008ZM55.592 96.632C62.6 96.632 68.888 95 74.456 91.736C80.12 88.472 84.536 83.816 87.704 77.768C90.968 71.72 92.6 64.712 92.6 56.744C92.6 48.68 90.968 41.672 87.704 35.72C84.536 29.672 80.168 25.016 74.6 21.752C69.032 18.488 62.696 16.856 55.592 16.856C48.488 16.856 42.152 18.488 36.584 21.752C31.016 25.016 26.6 29.672 23.336 35.72C20.168 41.672 18.584 48.68 18.584 56.744C18.584 64.712 20.168 71.72 23.336 77.768C26.6 83.816 31.016 88.472 36.584 91.736C42.248 95 48.584 96.632 55.592 96.632Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M136.395 96.344H171.531V107H123.291V6.632H136.395V96.344Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M198.551 6.632V107H185.447V6.632H198.551Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M303.829 6.632L265.957 107H250.837L212.965 6.632H226.933L258.469 93.176L290.005 6.632H303.829Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M331.301 17.288V50.84H367.877V61.64H331.301V96.2H372.197V107H318.197V6.488H372.197V17.288H331.301Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M444.874 107L420.97 65.96H405.13V107H392.026V6.632H424.426C432.01 6.632 438.394 7.928 443.578 10.52C448.858 13.112 452.794 16.616 455.386 21.032C457.978 25.448 459.274 30.488 459.274 36.152C459.274 43.064 457.258 49.16 453.226 54.44C449.29 59.72 443.338 63.224 435.37 64.952L460.57 107H444.874ZM405.13 55.448H424.426C431.53 55.448 436.858 53.72 440.41 50.264C443.962 46.712 445.738 42.008 445.738 36.152C445.738 30.2 443.962 25.592 440.41 22.328C436.954 19.064 431.626 17.432 424.426 17.432H405.13V55.448Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M568.281 55.304C571.929 55.88 575.242 57.368 578.218 59.768C581.29 62.168 583.689 65.144 585.417 68.696C587.241 72.248 588.153 76.04 588.153 80.072C588.153 85.16 586.857 89.768 584.265 93.896C581.673 97.928 577.882 101.144 572.89 103.544C567.994 105.848 562.185 107 555.465 107H518.025V6.632H554.025C560.841 6.632 566.65 7.78399 571.45 10.088C576.25 12.296 579.849 15.32 582.249 19.16C584.649 23 585.849 27.32 585.849 32.12C585.849 38.072 584.217 43.016 580.953 46.952C577.785 50.792 573.561 53.576 568.281 55.304ZM531.13 49.976H553.161C559.305 49.976 564.057 48.536 567.417 45.656C570.777 42.776 572.458 38.792 572.458 33.704C572.458 28.616 570.777 24.632 567.417 21.752C564.057 18.872 559.209 17.432 552.873 17.432H531.13V49.976ZM554.313 96.2C560.841 96.2 565.929 94.664 569.577 91.592C573.225 88.52 575.049 84.248 575.049 78.776C575.049 73.208 573.129 68.84 569.289 65.672C565.449 62.408 560.314 60.776 553.882 60.776H531.13V96.2H554.313Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M619.154 6.632V70.136C619.154 79.064 621.314 85.688 625.634 90.008C630.05 94.328 636.146 96.488 643.922 96.488C651.602 96.488 657.602 94.328 661.922 90.008C666.338 85.688 668.546 79.064 668.546 70.136V6.632H681.65V69.992C681.65 78.344 679.97 85.4 676.61 91.16C673.25 96.824 668.69 101.048 662.93 103.832C657.266 106.616 650.882 108.008 643.778 108.008C636.674 108.008 630.242 106.616 624.482 103.832C618.818 101.048 614.306 96.824 610.946 91.16C607.682 85.4 606.05 78.344 606.05 69.992V6.632H619.154Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M765.286 6.632V17.288H737.926V107H724.822V17.288H697.318V6.632H765.286Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M794.52 96.344H829.656V107H781.416V6.632H794.52V96.344Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M856.676 17.288V50.84H893.252V61.64H856.676V96.2H897.572V107H843.572V6.488H897.572V17.288H856.676Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M970.249 107L946.344 65.96H930.505V107H917.4V6.632H949.8C957.384 6.632 963.768 7.928 968.952 10.52C974.232 13.112 978.168 16.616 980.76 21.032C983.352 25.448 984.648 30.488 984.648 36.152C984.648 43.064 982.633 49.16 978.601 54.44C974.665 59.72 968.712 63.224 960.744 64.952L985.945 107H970.249ZM930.505 55.448H949.8C956.904 55.448 962.232 53.72 965.784 50.264C969.336 46.712 971.112 42.008 971.112 36.152C971.112 30.2 969.336 25.592 965.784 22.328C962.328 19.064 957 17.432 949.8 17.432H930.505V55.448Z"
            stroke="white"
            stroke-width="5"
          />
        </svg>
      </div>
    );
  }
}
