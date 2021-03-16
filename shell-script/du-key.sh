#!/bin/bash

# Author: Zixiang Mao
# Date: March 15 2021
# Description: Summarize disk usage of the set of files recursively for directories.
# Version: 1.0.0

# Command usage -k is optional
usage()
{
	echo "Usage : du-key [-k keyword]... [PATH]..."
	exit 2
}

# handlering empty argument
if [ $# -eq 0 ]; then usage ; fi

# parsing arguments from the command line
PARSED_ARGUMENTS=$(getopt -o k: --long help -- "$@")
eval set -- "$PARSED_ARGUMENTS"


while [ $# -gt 0 ]
do
	case "$1" in
		-k) KEYWORD="$2" ; shift 2 ;;
		--help) usage ;;
        --) shift; break ;;
		*) usage ;;
	esac
done

# Looping and filtering throug the remainning arguments
for param in $@
do
	if [[ -v KEYWORD ]]; then
		if [[ $param =~ "$KEYWORD" ]]; then
			du -h $param
		fi
	else
		du -h $param
	fi
done
exit 0;
