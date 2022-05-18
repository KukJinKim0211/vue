package com.ssafy.vue.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vue.dto.Board;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {
	private final Logger logger = LoggerFactory.getLogger(HouseMapController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	@PostMapping
	public ResponseEntity<Map<String, String>> writeBoard(@RequestBody String a) {
		logger.debug("Login - 호출");
		Map<String, String> map = new HashMap<>();
		map.put("userid", "ssafy");
		map.put("username", "김국진");
		return new ResponseEntity<Map<String, String>>(map, HttpStatus.OK);
	}
	
	public String createJWtoken(Accountinfo accountInfo, Long expireTime) {
		
	}
}
