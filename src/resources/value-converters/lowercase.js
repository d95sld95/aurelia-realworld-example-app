export class LowercaseValueConverter {
  toView(value) {
    return ('' + value).toLowerCase();
  }
}
