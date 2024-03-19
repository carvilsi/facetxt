#!/usr/bin/env bats

@test "should retrieve a random face" {
  run ./bin/facetxt.js rand
  [ "${#output}" -gt 0 ]
  [ "${output}" != "undefined" ]
}

@test "should retrieve a random face with description" {
  description=$(./bin/facetxt.js randDesc | sed 's/--//g' | awk '{print $NF}'); 
  found=$(grep $description src/faces.js)
  [ "${#found}" -gt 0 ]
}

@test "should retrieve an array with all faces" {
  run ./bin/facetxt.js all 
  [ "${#output}" -gt 0 ]
  [ "${output}" != "undefined" ]
}

@test "should retrieve a pretty print of facess" {
  run ./bin/facetxt.js list 
  [ "${lines[0]}" = "western:" ]
  [ $(expr "${lines[1]}" : ".*sideways latin only emoticons:") -ne 0 ]
  [ $(expr "${lines[2]}" : ".*smiley happy face:") -ne 0 ]
  [ $(expr "${lines[3]}" : ".*:‑) :) :-] :] :-> :> 8-) 8) :-} :} :o) :c) :^) =] =)") -ne 0 ]
}

@test "should retrieve a cthulhu like face" {
  run ./bin/facetxt.js like cthulhu
  [ "$output" == "^(;,;)^" ]
  [ "${output}" != "undefined" ]
}

@test "should not retrieve a foobar like face, since does not exists" {
  run ./bin/facetxt.js like foobar 
  [ "$output" == "Could not find a face like: foobar" ]
  [ "${output}" != "undefined" ]
}

@test "should retrieve a cthulhu likes face" {
  run ./bin/facetxt.js likes cthulhu
  [ "$output" == "[ '^(;,;)^' ]" ]
  [ "${output}" != "undefined" ]
}

@test "should not retrieve a foobar likes face, since does not exists" {
  run ./bin/facetxt.js likes foobar 
  [ "$output" == "Could not find faces like: foobar" ]
  [ "${output}" != "undefined" ]
}
