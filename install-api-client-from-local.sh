#!/usr/bin/env bash
backend_code_location=${BACKEND_CODE_LOCATION:-../scala-fun-backend}
frontend_code_location=$PWD
cd $backend_code_location
package_name=$(bash "build-api-client-locally.sh" | tail -1)
cd $frontend_code_location
npm install --no-save "$backend_code_location/$package_name"
