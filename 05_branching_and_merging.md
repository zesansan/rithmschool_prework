## Branching and Merging

**Part I**

* git clean removes unstaged files from the working directory
* -d locates untracked or unmerged directories and files, -f forces them to be deleted. 
* git checkout -b BRANCH_NAME
* A fast-forward merge is when commits happened in a chronological order on the orignal branch, and recursive is when simultaneous commits took place on both the original branch and a new branch
* git checkout BRANCH_NAME
* git checkout --FILE_NAME
* git branch -D BRANCH_NAME
* git diff shows you the differences between commits 
* git rm --cached NAME_OF_FILE
* When there are different committed information on the same file from different branches 

**Part II**

* mkdir merge_conflicts_again 
* cd merge_conflicts_again
* git init
* echo first > first.txt 
* git add .
* git commit -m "adding first to first.txt"
* git checkout -b newer_branch
* echo second > second.txt
* git add . 
* git commit -m "adding second to second.txt"
* git checkout master 
* echo third > second.txt
* git add . 
* git commit -m "adding third to second.txt"
* git merge newer_branch <<< merge conflict


