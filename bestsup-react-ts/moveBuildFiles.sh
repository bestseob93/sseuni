#!/bin/bash
# 이 파일은 빌드 후 파일들을 옮기기 위한 스크립트입니다.
# /build
#   to
# ../somewhere

cd build
echo '1/2 cd build..'

mv -v * ../../../bestseob93.github.io
echo '2/2 moved files..'
