class Cell {
  constructor() {
    this.index = null;
    this.name = null;
  }

  getCount() {
    let cellCountRef = database.ref("cellCount");
    cellCountRef.on("value", (data) => {
      cellCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      cellCount: count,
    });
  }

  update() {
    var cellIndex = "cells/cell" + this.index;
    database.ref(cellIndex).set({
      name: this.name,
    });
  }

  static getCellInfo() {
    var cellInfoRef = database.ref("cells");
    cellInfoRef.on("value", (data) => {
      allCells = data.val();
    });
  }
}
