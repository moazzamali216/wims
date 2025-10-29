
  const colors = [
    "#a68b4a","#b99f73","#d4c6a8","#e8e2d1","#f2c6a8","#c6b49f","#8b5a2b","#5a3e2b",
    "#ccaabb","#aabbcc","#88aacc","#77bbcc","#66ccdd","#55ddcc","#44ccbb","#33bbaa",
    "#003322","#002211","#001100","#111111","#222222","#333333","#444444","#555555",
    "#666666","#777777","#888888","#999999","#aaaaaa","#bbbbbb","#cccccc","#dddddd","#eeeeee","#ffffff",
    "#f4a261","#e76f51","#2a9d8f","#264653","#e9c46a","#f4d35e","#ee6c4d","#3d5a80","#98c1d9","#293241",
    "#ff6b6b","#f06595","#fcd34d","#a3e635","#4ade80","#22d3ee","#60a5fa","#818cf8","#c084fc","#f472b6"
  ];

  const gridContainer = document.getElementById("color-grid");

  colors.forEach(color => {
    const wrapper = document.createElement("div");
    wrapper.className = "flex flex-col items-center";

    const colorRect = document.createElement("div");
    colorRect.className = "w-12 h-12 rounded-md shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer";
    colorRect.style.backgroundColor = color;

    const hexLabel = document.createElement("span");
    hexLabel.className = "mt-2 font-bold text-sm poppins text-gray-900";
    hexLabel.textContent = color;

    wrapper.appendChild(colorRect);
    wrapper.appendChild(hexLabel);
    gridContainer.appendChild(wrapper);
  });
