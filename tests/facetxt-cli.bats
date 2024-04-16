#!/usr/bin/env bats

@test "should retrieve a random face" {
  run ./bin/facetxt.js rand
  [ "${#output}" -gt 0 ]
  [ "${output}" != "undefined" ]
  run ./bin/facetxt.js --rand
  [ "${#output}" -gt 0 ]
  [ "${output}" != "undefined" ]
  run ./bin/facetxt.js
  [ "${#output}" -gt 0 ]
  [ "${output}" != "undefined" ]
}

@test "should retrieve a random face with description" {
  description=$(./bin/facetxt.js randDesc | sed 's/--//g' | awk '{print $NF}'); 
  found=$(grep $description src/faces.js)
  [ "${#found}" -gt 0 ]
  description=$(./bin/facetxt.js --randDesc | sed 's/--//g' | awk '{print $NF}'); 
  found=$(grep $description src/faces.js)
  [ "${#found}" -gt 0 ]
}

@test "should retrieve an array with all faces" {
  run ./bin/facetxt.js all 
  [ "${#output}" -gt 0 ]
  [ "${output}" != "undefined" ]
  run ./bin/facetxt.js --all 
  [ "${#output}" -gt 0 ]
  [ "${output}" != "undefined" ]
}

@test "should retrieve a pretty print of facess" {
  run ./bin/facetxt.js list 
  [ "${lines[0]}" = "western:" ]
  [ $(expr "${lines[1]}" : ".*sideways latin only emoticons:") -ne 0 ]
  [ $(expr "${lines[2]}" : ".*smiley happy face:") -ne 0 ]
  [ $(expr "${lines[3]}" : ".*:‑) :) :-] :] :-> :> 8-) 8) :-} :} :o) :c) :^) =] =)") -ne 0 ]
  run ./bin/facetxt.js --list 
  [ "${lines[0]}" = "western:" ]
  [ $(expr "${lines[1]}" : ".*sideways latin only emoticons:") -ne 0 ]
  [ $(expr "${lines[2]}" : ".*smiley happy face:") -ne 0 ]
  [ $(expr "${lines[3]}" : ".*:‑) :) :-] :] :-> :> 8-) 8) :-} :} :o) :c) :^) =] =)") -ne 0 ]
}

@test "should retrieve a cthulhu like face" {
  run ./bin/facetxt.js like cthulhu
  [ "$output" == "^(;,;)^" ]
  [ "${output}" != "undefined" ]
  run ./bin/facetxt.js --like cthulhu
  [ "$output" == "^(;,;)^" ]
  [ "${output}" != "undefined" ]
}

@test "should not retrieve a foobar like face, since does not exists" {
  run ./bin/facetxt.js like foobar 
  [ $(expr "${lines[0]}" : "Could not find a face like: \"foobar\".*") -ne 0 ]
  [ "${output}" != "undefined" ]
}

@test "should retrieve a cthulhu likes face" {
  run ./bin/facetxt.js likes cthulhu
  [ "$output" == "[ '^(;,;)^' ]" ]
  [ "${output}" != "undefined" ]
  run ./bin/facetxt.js --likes cthulhu
  [ "$output" == "[ '^(;,;)^' ]" ]
  [ "${output}" != "undefined" ]
}

@test "should not retrieve a foobar likes face, since does not exists" {
  run ./bin/facetxt.js likes foobar 
  [ $(expr "${lines[0]}" : "Could not find a face like: \"foobar\".*") -ne 0 ]
  [ "${output}" != "undefined" ]
}

@test "should retrieve help" {
  run ./bin/facetxt.js help 
  [ $(expr "${lines[0]}" : "facetxt@.* with <3 by char@omg.lol") -ne 0 ]
  [ "${lines[1]}" = "Commands:" ]
  [ $(expr "${lines[2]}" : ".*version.*output the version number") -ne 0 ]
  [ $(expr "${lines[3]}" : ".*help.*display this text") -ne 0 ]
  [ $(expr "${lines[4]}" : ".*rand.*get a random face") -ne 0 ]
  [ $(expr "${lines[5]}" : ".*randDesc.*get a random face with description") -ne 0 ]
  [ $(expr "${lines[6]}" : ".*list.*pretty prints all the faces") -ne 0 ]
  [ $(expr "${lines[7]}" : ".*all.*get an array with all faces") -ne 0 ]
  [ $(expr "${lines[8]}" : ".*like.*get one face by name; if more than one, will be return randomly") -ne 0 ]
  [ $(expr "${lines[9]}" : ".*likes.*get an array of faces by name") -ne 0 ] 
  run ./bin/facetxt.js --help 
  [ $(expr "${lines[0]}" : "facetxt@.* with <3 by char@omg.lol") -ne 0 ]
}

@test "should retrieve help on unknown command" {
  run ./bin/facetxt.js foobar 
  [ $(expr "${lines[0]}" : "Unknown command: \"foobar\".*") -ne 0 ]
  [ "${lines[1]}" = "Usage:" ]
  [ $(expr "${lines[2]}" : "facetxt@.* with <3 by char@omg.lol") -ne 0 ]
  [ "${lines[3]}" = "Commands:" ]
}

@test "should retrieve version" {
  run ./bin/facetxt.js --version 
  [ $(expr "${lines[0]}" : "facetxt@.*") -ne 0 ] 
  run ./bin/facetxt.js version 
  [ $(expr "${lines[0]}" : "facetxt@.*") -ne 0 ]
}
