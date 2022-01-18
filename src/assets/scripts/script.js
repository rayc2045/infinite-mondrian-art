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
    window.onscroll = () => this.addBlocksAtTheBottom();
    setTimeout(() => (this.isLoading = false), 2000);
  },
  getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getGridStyle(columnNum, rowNum) {
    let [column, row] = ['', ''];
    for (let i = 0; i < columnNum; i++) column += `${this.getRandomNum(1, 4)}fr `;
    for (let i = 0; i < rowNum; i++) row += `${this.getRandomNum(1, 4)}fr `;
    return `grid-template-columns: ${column.trim()}; grid-template-rows: ${row.trim()}`
  },
  getBackgroundColorClassNames(num) {
    const classNames = [];
    for (let i = 0; i < num; i++) {
      classNames.push(
        this.colors[this.getRandomNum(0, this.colors.length - 1)]
      );
    }
    return classNames;
  },
  isTwoObjectsTheSame(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  },
  generateBlocks(n) {
    let times = 0;
    while (times < n) {
      const [columnNum, rowNum] = [this.getRandomNum(2, 4), this.getRandomNum(2, 4)];
      const block = {
        style: this.getGridStyle(columnNum, rowNum),
        innerBlockClassNames: this.getBackgroundColorClassNames(columnNum * rowNum)
      };
      for (let i = 0; i < this.blocks.length; i++) {
        if (this.isTwoObjectsTheSame(this.blocks[i], block)) continue;
      }
      this.blocks.push(block);
      times++;
    }
  },
  isAtTheBottom() {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    return scrollTop + clientHeight >= scrollHeight;
  },
  addBlocksAtTheBottom() {
    if (this.isAtTheBottom()) this.generateBlocks(this.generateNum);
  }
}).mount();
