#!/bin/bash
#
# copy-ssh-keys.sh
#
# 현재 접속한 서버의 공개키를 대상 서버의 사용자 인증키에 추가하는 스크립트
# 패스워드는 직접 입력받게 되면 커맨드에 기록이 남기 때문에 파일에 기록된 정보를 읽어들인다
# e.g. 
# [target-hosts-file]
# 	host01
# 	host02
# 	host03
# 	...
#
user=$1
pwd=$2
target_hosts=$3

if [[ -z "$1" || -z "$2" || -z "$3" ]]; then
	echo "Usage: copy-ssh-keys [user] [password-file] [target-hosts-file]"
	exit 0
else
	while read host; do
		sshpass -f $pwd ssh-copy-id -o StrictHostKeyChecking=no $user@$host;
	done <$target_hosts
fi