## Permissions, Redirection, Pipping
**Part I**

1. touch restricted.txt
2. chmod 600 restricted.txt
3. chmod ugo+rwx restricted.txt
4. Sequence of commands: 
	* mkdir secret_files
	* cd secret_files
	* touch first_secret.txt
	* mkdir classified
	* cd classified
	* touch super_secret.txt
5. 	chmod -R 770 secret_files
6. ln restricted.txt hard_link
7. ln -s secret_files/classified classified_link 

**Part II** 

1. sort vegetables.txt 
2. wc -l vegetables.txt 
3. cat vegetables.txt | sort | uniq > vegetables_sorted.txt 
4. cat vegetables.txt | tail -n 3 > last_three.txt 
5. cat vegetables.txt | grep Broccoli | wc -l


