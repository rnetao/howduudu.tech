#!/bin/bash

rsync -avz --delete \
/Users/rnet/顺腾/海运周报 \
root@sh-sun.top:/data/pdf/

echo "PDF同步完成"
