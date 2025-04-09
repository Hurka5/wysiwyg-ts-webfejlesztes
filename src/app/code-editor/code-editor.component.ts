import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-code-editor',
  imports: [],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
export class CodeEditorComponent {
  @ViewChild('codeEditor') codeEditor!: ElementRef;
  lineNums = "1."
  code = ""

  countLinesInDiv(div: HTMLElement): number {
    const style = window.getComputedStyle(div);
    let lineHeight = parseFloat(style.lineHeight);

    if (isNaN(lineHeight)) {
      const fontSize = parseFloat(style.fontSize);
      lineHeight = fontSize * 1.2; // fallback estimate
    }

    const height = div.getBoundingClientRect().height;
    return Math.round(height / lineHeight);
  }

  updateText(event: Event) {
    const target = event.target as HTMLElement;
    let linesCount = this.countLinesInDiv(target);
    this.lineNums = ""
    for (let index = 0; index < linesCount; index++) {
      this.lineNums += (index + 1).toString().padStart(3, ' ');
    }
  }
  focusEditor() {
    if (this.codeEditor) {
      this.codeEditor.nativeElement.focus();
    }
  }
}
