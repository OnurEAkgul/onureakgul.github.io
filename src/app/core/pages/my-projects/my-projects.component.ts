import { Component } from '@angular/core';
import { GithubService } from '../../services/github/github.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css'],
})
export class MyProjectsComponent {
  repositories: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.loadRepositories();
  }

  loadRepositories() {
    this.githubService.GetGithubProjects().subscribe((repos: any[]) => {
      this.repositories = repos;
      console.log(this.repositories);
    });
  }
}
