import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  selectedLanguage: any;
  languaguesList: any[] = [];

  public changeMode() {
    document.body.classList.toggle('cyber-punk');
    //document.body.classList.toggle('dark-theme');
  }

  ngOnInit(): void {
    this.languaguesList = [
      {
        name: "PT-BR",
        //code: LanguageCode.PT_BR,
        flag: "fi fi-br"
      },
      {
        name: "EN",
        //code: LanguageCode.EN,
        flag: "fi fi-gb"
      }
    ];

    this.languaguesList.forEach(languague => {
      /*
      if (languague.code == AppConfig.language) {
        this.selectedLanguage = languague;
      }
        */
    })
  }

  public onChangeLanguage(event: any) {
    //let language: LanguageCode = event.value.code;
    //AppConfig.setLanguage(language);
  }

}
