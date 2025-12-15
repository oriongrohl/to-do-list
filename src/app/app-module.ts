import { NgModule } from "@angular/core";
import { ListComponent } from './components/list/list';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from "./task/task";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ListComponent, TaskComponent],
    imports: [CommonModule],
    exports: [ListComponent]
})

export class AppModule{

}
