**Contribution Guide**

Always create a new branch from dev when working on a task or issue. 
Once you've made your changes, submit a PR on GitHub.

1. Switch to the dev branch and pull the newest changes:
   ```bash
   git switch dev
   git pull
   ```

2. Create a new branch for your work. Please name "your_task" as specific and accurate as possible (at max 4 words):
   ```bash
   git switch -c [your_name]/[your_task]
   ```

3. Save your files after making contributions.
   ```bash
   git add .
   git commit -m "Finished [your_name]/[your_task]"
   ```

4. Once you're finished, push your branch to the remote repository:
   ```bash
   git push origin [branch_name]
   ```

5. Go to GitHub and submit a PR to merge your changes into the dev branch.