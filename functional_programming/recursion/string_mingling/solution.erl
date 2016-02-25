-module(solution).
-export([main/0]).

solve([], []) -> [];
solve([P|PS], [Q|QS])
  when 96 =< P, P =< 123 ->
    [P, Q | solve(PS, QS)];
solve(_, _) -> [].

main() ->
    P = io:get_line(""),
    Q = io:get_line(""),
    io:format(solve(P, Q)).
main(_) -> main().
