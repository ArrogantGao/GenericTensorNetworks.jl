using GraphTensorNetworks, Test, Graphs

@testset "set cover" begin
    sets = [[1, 2, 5], [1, 3], [2, 4], [3, 6], [2, 3, 6]]  # each set is a vertex
    gp = SetCover(sets; optimizer=GreedyMethod())
    res = best_solutions(gp; all=true)[]
    @test res.n == 2
    @test BitVector(Bool[0,0,1,1,0]) ∈ res.c.data
    @test BitVector(Bool[1,0,0,1,0]) ∈ res.c.data
    @test BitVector(Bool[0,1,1,0,0]) ∈ res.c.data
    @test all(x->is_set_cover(sets, x),res.c)
end