import { Routes } from '@angular/router';
import { MainComponent } from './structure/main/main.component';

export const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule), },
            //{ path: 'terminal', loadChildren: () => import('./pages/linux-terminal/linux-terminal.module').then((m) => m.LinuxTerminalModule), },
            //{ path: 'projects', loadChildren: () => import('./pages/projects/projects.module').then((m) => m.ProjectsModule), },
            //{ path: 'education', loadChildren: () => import('./pages/education/education.module').then((m) => m.EducationModule), },

        ]
    },
    //{ path: 'module8', loadChildren: () => import('./pages/module8/module8.module').then((m) => m.Module8Module), },
    { path: '**', redirectTo: '/' },
];