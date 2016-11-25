

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import cn.sumpay.accountant.Cmp;
import cn.sumpay.accountant.extservice.AccountSubjectService;
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Cmp.class)
public class TestDubbo {
	Log log =  LogFactory.getLog(TestDubbo.class);
	@Autowired
	AccountSubjectService accountSubjectService;
	
	
	@Test
	public void test(){
		String className = accountSubjectService.getClass().getName();
		log.info("Springboot接入DUBBO，获取代理类名字："+className);
	}
}
