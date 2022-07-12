export class CustomArray<T> {
  public length: number;
  public data: { [key: string]: T };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  public isEmpty(): boolean {
    return !this.length;
  }

  private faultyIndex(index: number): boolean {
    return !this.data[index];
  }

  public get(index: number): T {
    if (this.faultyIndex(index)) throw new Error('Invalid index');

    return this.data[index];
  }

  public push(item: T): number {
    this.data[this.length++] = item;

    return this.length;
  }

  public pop(): T {
    if (this.isEmpty()) throw new Error('Array is empty');

    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  private shiftItems(index: number): void {
    if (this.isEmpty()) throw new Error('Array is empty');
    if (this.faultyIndex(index)) throw new Error('Invalid index');

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  public delete(index: number): T {
    const item = this.data[index];

    this.shiftItems(index);

    return item;
  }
}
