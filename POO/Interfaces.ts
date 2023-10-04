interface Car {
  parts: Array<string>
  assembly()
}

class carModelA implements Car {
  parts: string[] = ['engine 1.0', 'manual_transmission']

  assembly() {
    const car = this.parts.join('')
  }
}

class carMode2A implements Car {
  parts: string[] = ['engine 2.0', 'manual_transmission']

  assembly() {
    const car = this.parts.join('')
  }
}
