package cn.sumpay.accountant.service;

import java.util.List;
import java.util.UUID;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogConfigurationException;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonAnyFormatVisitor;
import com.google.gson.Gson;

import cn.sumpay.accountant.dao.CasBankBalanceCheckMapper;
import cn.sumpay.accountant.model.CasBankBalanceCheck;
import cn.sumpay.accountant.model.CasBankBalanceCheckExample;
@Service
public class BankBalanceCheckService {
	Log log = LogFactory.getLog(BankBalanceCheckService.class);
	@Autowired
	CasBankBalanceCheckMapper casBankBalanceCheckMapper;
	
	public List<CasBankBalanceCheck> queryList(){
		CasBankBalanceCheckExample example =new CasBankBalanceCheckExample();
		CasBankBalanceCheck record = new CasBankBalanceCheck();
		record.setBalanceDate("20151025");
		record.setBankId("safd54dsg");
		String  id =UUID.randomUUID().toString();
		id = id.replace("-","");
		record.setId(id);
		record.setModifyTime("sagfdshg55");
		casBankBalanceCheckMapper.insertSelective(record);
		List<CasBankBalanceCheck> list =  casBankBalanceCheckMapper.selectByExample(example);
		Gson gson = new Gson();
		log.info(gson.toJson(list));
		return list;
	}
}
