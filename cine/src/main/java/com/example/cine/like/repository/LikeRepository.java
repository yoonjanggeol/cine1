package com.example.cine.like.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cine.like.entity.LikeEntity;
import com.example.cine.login.entity.MemberEntity;


public interface LikeRepository extends JpaRepository<LikeEntity, Long> {
   //좋아요 클릭한 아이디, 좋아요 영화 정보 중복찾기
    LikeEntity findByMovieNoAndMember_Membid(int movieNo, String membid);
    //좋아요 클릭시 카운트
    int countByMovieNo(int movieNo);
    // int countByMovieNo(int movieNo);

    void deleteByMember(MemberEntity member);
}