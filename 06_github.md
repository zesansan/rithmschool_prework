## GitHub 

 **Part I**
 
 1. Create own local repository: 
 
   		mkdir github_learn
   		cd github_learn 
   		git init 
		touch one.txt
		git add .
		git commit -m "adding one.txt"
		touch two.txt
		git add .
		git commit -m "adding two.txt"
		
2. Create Remote repository and push code from local repo:
	- Goto GitHub and click on new repo "github_practice"
	- Go back to terminal and enter: `git remote add origin git@github.com:zesansan33/github_practice.git`
	* `git push -u origin master`
3. Fork the repo:
	* Go to git_practice and click on Fork button 
	* `git clone git@github.com:zesansan33/git_practice.git`

4. Create a new branch locally and push it to GitHub: 
	
		git checkout -b zejian_branch 
		touch new_feature.txt 
		git add .
		git commit -m "added new_feature.txt"

5. See pull request from zesansan.

**Part II**

The killer was Jeremy Bowers! 

