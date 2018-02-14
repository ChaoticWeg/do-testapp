@echo off
cls

setlocal

    set hh=%time:~0,2%
    if %hh:~0,1% == " " set hh=0%hh:~1,1%

    set mm=%time:~3,2%
    if %mm:~0,1% == " " set mm=0%mm:~1,1%

    set ss=%time:~6,2%
    if %ss:~0,1% == " " set ss=0%ss:~1,1%

    echo Start: %date% at %hh%:%mm%:%ss%
    echo.

    set NODE_LOGLEVEL=dev
    set PORT=3000

    node index.js

endlocal
