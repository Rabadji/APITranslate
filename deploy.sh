ssh root@159.89.108.167'
    cd /root/APITranslate;
    git pull;
    npm install;
    forever stop index.js;
    forever start index.js;
    
'