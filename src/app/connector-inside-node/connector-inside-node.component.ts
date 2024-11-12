import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FCanvasComponent, FFlowModule } from '@foblex/flow';

@Component({
  selector: 'connector-inside-node',
  styleUrls: ['./connector-inside-node.component.scss'],
  templateUrl: './connector-inside-node.component.html',
  standalone: true,
  imports: [
    FFlowModule
  ]
})
export class ConnectorInsideNodeComponent implements AfterViewInit {
  @ViewChild(FCanvasComponent, { static: true })
  public fCanvas!: FCanvasComponent;
  
  ngAfterViewInit(): void {
    this.fCanvas.resetScaleAndCenter(false);
  }
}