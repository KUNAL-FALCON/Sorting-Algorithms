import {
  swap
} from './Utility';

export function QuickSort(arr) {
  const copy = [...arr];
  const animations = [];
  quickSortHelper(copy, 0, copy.length - 1, animations);
  return animations;
}

function quickSortHelper(arr, left, right, animations) {
  if (right <= left) return;
  const part = partition(arr, left, right, animations);
  quickSortHelper(arr, left, part, animations);
  quickSortHelper(arr, part + 1, right, animations);
}

function partition(arr, left, right, animations) {
  let i = left;
  let j = right + 1;
  const pivot = arr[left];
  while (true) {
    while (arr[++i] <= pivot) {
      if (i === right) break;
      animations.push([
        [i], false
      ]);
    }
    while (arr[--j] >= pivot) {
      if (j === left) break;
      animations.push([
        [j], false
      ]);
    }
    if (j <= i) break;
    animations.push([
      [i, arr[j]], true
    ]);
    animations.push([
      [j, arr[i]], true
    ]);
    swap(arr, i, j);
  }
  animations.push([
    [left, arr[j]], true
  ]);
  animations.push([
    [j, arr[left]], true
  ]);
  swap(arr, left, j);
  return j;
}


export function MergeSort(arr) {
  const copy = [...arr];
  const len = copy.length;
  const aux = Array(len);
  const animations = [];
  mergeSortHelper(copy, aux, 0, len - 1, animations);
  return animations;
}

function mergeSortHelper(arr, aux, left, right, animations) {
  if (right <= left) return;
  const mid = left + Math.floor((right - left) / 2);
  mergeSortHelper(arr, aux, left, mid, animations);
  mergeSortHelper(arr, aux, mid + 1, right, animations);
  merge(arr, aux, left, mid, right, animations);
}

function merge(arr, aux, left, mid, right, animations) {
  for (let i = left; i <= right; i++) aux[i] = arr[i];
  let i = left;
  let j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      animations.push([
        [j], false
      ]);
      animations.push([
        [k, aux[j]], true
      ]);
      arr[k] = aux[j++];
    } else if (j > right) {
      animations.push([
        [i], false
      ]);
      animations.push([
        [k, aux[i]], true
      ]);
      arr[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      animations.push([
        [i, j], false
      ]);
      animations.push([
        [k, aux[j]], true
      ]);
      arr[k] = aux[j++];
    } else {
      animations.push([
        [i, j], false
      ]);
      animations.push([
        [k, aux[i]], true
      ]);
      arr[k] = aux[i++];
    }
  }
}

export function InsertionSort(arr) {
  const copy = [...arr];
  const animations = [];
  for (let i = 1; i < copy.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      animations.push([[j, j + 1], false]);
      if (copy[j + 1] < copy[j]) {
        animations.push([
          [j, copy[j + 1]], true
        ]);
        animations.push([
          [j + 1, copy[j]], true
        ]);
        swap(copy, j, j + 1);
      } else break;
    }
  }
  return animations;
}