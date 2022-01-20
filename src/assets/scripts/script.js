import { createApp } from './petite-vue.js';

createApp({
  isLoading: true,
  colors: [
    'red',
    'yellow',
    'blue',
    'gray',
    'white', 'white', 'white', 'white', 'white',
    'white', 'white', 'white', 'white', 'white',
  ],
  blocks: [],
  generateNum: 12,
  init() {
    this.generateBlocks(this.generateNum);
    window.onscroll = () => this.addBlocksWhenReachTheEnd();
    setTimeout(() => (this.isLoading = false), 2000);
  },
  getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getRandomPositiveDecimal(n) {
    return (
      this.getRandomNum(1, 9) +
      this.getRandomNum(0, 9) / 10 +
      this.getRandomNum(0, 9) / 100
    ).toFixed(n);
  },
  getGridStyle(columnNum, rowNum) {
    let [column, row] = ['', ''];
    for (let i = 0; i < columnNum; i++) column += `${this.getRandomPositiveDecimal(2)}fr `;
    for (let i = 0; i < rowNum; i++) row += `${this.getRandomPositiveDecimal(2)}fr `;
    return `grid-template-columns: ${column.trim()}; grid-template-rows: ${row.trim()}`;
  },
  getColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
      colors.push(
        this.colors[this.getRandomNum(0, this.colors.length - 1)]
      );
    }
    return colors;
  },
  objectsEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  },
  arraysEqual(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  },
  colorsRepeated(colors) {
    let isRepeated = false;
    for (let i = 0; i < this.blocks.length; i++) {
      if (this.arraysEqual(this.blocks[i].colors, colors)) isRepeated = true;
    }
    return isRepeated;
  },
  isAtOverallHeightPos(percentage = 1) {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    return scrollTop + clientHeight >= scrollHeight * percentage;
  },
  generateBlocks(n) {
    let count = 0;
    while (count < n) {
      const [columnNum, rowNum] = [this.getRandomNum(2, 4), this.getRandomNum(2, 4)];
      const block = {
        style: this.getGridStyle(columnNum, rowNum),
        colors: this.getColors(columnNum * rowNum)
      };
      if (this.colorsRepeated(block.colors)) continue;
      this.blocks.push(block);
      count++;
    }
  },
  addBlocksWhenReachTheEnd() {
    if (this.isAtOverallHeightPos(0.8)) this.generateBlocks(this.generateNum);
  }
}).mount();
