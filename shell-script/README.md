## Create a bash script as following:

### Description:

- Summarize disk usage of the set of files recursively for directories with matched keywords.
- note: need to run chmod to du-key.sh file

### command usage:

- Usage: du-key [-k keyword]… [PATH]…
- help:`$ du-key --help`
- k only select files with keyword in file name
- Display values are in units of the first available SIZE from --block-size,and the DU_BLOCK_SIZE, BLOCK_SIZE and BLOCKSIZE environment variables.Otherwise, units default to 1024 bytes (or 512 if POSIXLY_CORRECT is set).The SIZE argument is an integer and optional unit (example: 10K is 10\*1024).Units are K,M,G,T,P,E,Z,Y (powers of 1024) or KB,MB,… (powers of 1000).
